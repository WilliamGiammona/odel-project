import pandas as pd
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load datasets
df = pd.read_csv("DistractedDrivingTrainingSetUpdated.csv")
test_df = pd.read_csv("DistractedDrivingTestSetUpdated.csv")

# Fill missing values with mode
modes = df.mode().iloc[0]
df.fillna(modes, inplace=True)
test_df.fillna(modes, inplace=True)

# Define dependent variable
dep = "Pass_Threshold"

# Train/validation split
train_df, val_df = train_test_split(df, test_size=0.25, random_state=42)

def xs_y(df):
    xs = df.drop(columns=[dep]).copy()
    return xs, df[dep] if dep in df else None

train_xs, train_y = xs_y(train_df)
val_xs, val_y = xs_y(val_df)

# Train model
rf = RandomForestClassifier(n_estimators=128, min_samples_leaf=5, random_state=42)
rf.fit(train_xs, train_y)

# Evaluate
preds = rf.predict(val_xs)
acc = accuracy_score(val_y, preds)
print(f"Validation accuracy: {acc:.4f}")

# Save model
with open("random_forest_model.pkl", "wb") as f:
    pickle.dump(rf, f)

print("✅ Model saved to 'random_forest_model.pkl'")

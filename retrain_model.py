import pandas as pd
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load datasets from the data/ folder
df = pd.read_csv("data/DistractedDrivingTrainingSetUpdated.csv")
test_df = pd.read_csv("data/DistractedDrivingTestSetUpdated.csv")

# Fill missing values with the mode of each column
modes = df.mode().iloc[0]
df.fillna(modes, inplace=True)
test_df.fillna(modes, inplace=True)

# Target column
dep = "Pass_Threshold"

# Split into training and validation sets
train_df, val_df = train_test_split(df, test_size=0.25, random_state=42)

# Function to separate features and labels
def xs_y(df):
    xs = df.drop(columns=[dep]).copy()
    return xs, df[dep] if dep in df else None

train_xs, train_y = xs_y(train_df)
val_xs, val_y = xs_y(val_df)

# Train the model
rf = RandomForestClassifier(n_estimators=128, min_samples_leaf=5, random_state=42)
rf.fit(train_xs, train_y)

# Evaluate accuracy
preds = rf.predict(val_xs)
acc = accuracy_score(val_y, preds)
print(f"Validation accuracy: {acc:.4f}")

# Save the model
with open("random_forest_model.pkl", "wb") as f:
    pickle.dump(rf, f)

print("✅ Model saved to 'random_forest_model.pkl'")

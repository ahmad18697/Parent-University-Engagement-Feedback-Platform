import os
import sys

# Add the current directory to Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy import create_engine
from app.database import Base, SessionLocal, engine
from app.models import Department

def reset_database():
    # Delete existing database if it exists
    db_path = "feedback.db"
    if os.path.exists(db_path):
        os.remove(db_path)
        print("🗑️  Old database deleted")
    
    # Create new database with updated schema
    Base.metadata.create_all(bind=engine)
    print("✅ New database created with updated schema")
    
    # Seed departments
    db = SessionLocal()
    try:
        default_departments = [
            "Hostel", "Academics", "Finance", "Transport",
            "Health", "Counselling", "IT Support", "Student Affairs"
        ]
        for name in default_departments:
            if not db.query(Department).filter(Department.name == name).first():
                db.add(Department(name=name))
                print(f"✅ Added department: {name}")
        db.commit()
        print("✅ All departments seeded successfully.")
    except Exception as e:
        db.rollback()
        print(f"❌ Error seeding departments: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()

if __name__ == "__main__":
    reset_database()
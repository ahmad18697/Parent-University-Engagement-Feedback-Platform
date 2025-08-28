from .database import Base, engine, SessionLocal
from .models import Department
from sqlalchemy import select

DEFAULT_DEPTS = [
    ("Hostel", "Accommodation, mess, hygiene, facilities"),
    ("Academics", "Courses, exams, teaching and learning"),
    ("Finance", "Fees, invoices, scholarships and refunds"),
    ("Transport", "Campus buses, parking, shuttles"),
    ("Health", "Medical center and insurance"),
    ("Counselling", "Counselling and student wellbeing"),
    ("IT Support", "Accounts, portals, network and software"),
    ("Student Affairs", "General issues and student life"),
]

def main():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        for name, desc in DEFAULT_DEPTS:
            exists = db.execute(select(Department).where(Department.name==name)).scalar_one_or_none()
            if not exists:
                db.add(Department(name=name, description=desc))
        db.commit()
        print("Database initialized and departments seeded.")
    finally:
        db.close()

if __name__ == "__main__":
    main()

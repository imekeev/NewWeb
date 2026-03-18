
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def move(self):
        return f"{self.brand} {self.model} go"

    def get_info(self):
        return f"Это транспортное средство марки {self.brand}."

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model} ({self.year})"


# Первый дочерний класс
class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type 

    # Переопределение метода родителя (Polymorphism)
    def move(self):
        return f"Машина {self.brand} едет по дороге, используя {self.fuel_type}."

    def open_trunk(self):
        return "Багажник открыт."


# Второй дочерний класс
class Bicycle(Vehicle):
    def __init__(self, brand, model, year, type_of_bike):
        super().__init__(brand, model, year)
        self.type_of_bike = type_of_bike 

    # Переопределение метода родителя
    def move(self):
        return f"Велосипед {self.brand} {self.model} едет по тротуару, крутя педали."

    def ring_bell(self):
        return "Дзынь-дзынь!"
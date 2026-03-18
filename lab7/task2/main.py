# main.py
from models import Car, Bicycle

def main():
    my_car = Car("Toyota", "Camry", 2022, "Бензин")
    my_bike = Bicycle("Giant", "Escape 3", 2021, "Шоссейный")

    vehicles = [my_car, my_bike]

    print("--- Демонстрация работы классов ---")
    for v in vehicles:
        print(v)                # Вызов str
        print(v.move())         # Демонстрация полиморфизма (разные реализации move)
        print(v.get_info())     # Вызов метода родителя
        print("-" * 20)

    # Вызов уникальных методов
    print(my_car.open_trunk())
    print(my_bike.ring_bell())

if __name__ == "__main__":
    main()
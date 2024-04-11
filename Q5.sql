CREATE TABLE Hotels (
    hotel_id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(255)
);

CREATE TABLE Menus (
    menu_id INT PRIMARY KEY AUTO_INCREMENT,
    menu_name VARCHAR(255),
    hotel_id INT,
    FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id)
);

CREATE TABLE FoodItems (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(255),
);

CREATE TABLE MenuFoodItems (
    menu_id INT,
    food_id INT,

    FOREIGN KEY (menu_id) REFERENCES Menus(menu_id),
    FOREIGN KEY (food_id) REFERENCES FoodItems(food_id),
    PRIMARY KEY (menu_id, food_id)
);

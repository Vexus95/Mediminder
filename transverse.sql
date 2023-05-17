CREATE TABLE Users(
   Id_User INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(50),
   password VARCHAR(50),
   isDoctor boolean
);

CREATE TABLE Traitement(
   Id_Traitement INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   Nom_medicament VARCHAR(50),
   jours VARCHAR(50),
   heure VARCHAR(50),
   Id_User INT,
   FOREIGN KEY(Id_User) REFERENCES Users(Id_User)
);

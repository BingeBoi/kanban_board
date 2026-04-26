    CREATE TABLE tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        status TEXT CHECK(status IN ('todo','doing','done')) NOT NULL
    );

    
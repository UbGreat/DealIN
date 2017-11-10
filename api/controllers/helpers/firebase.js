
var admin = require("firebase-admin");
var firebase = {
        credential: admin.credential.cert({
        projectId: "testproject-1e497",
        clientEmail: "firebase-adminsdk-cz2tv@testproject-1e497.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDUG7RO7z/1aQRT\nwHcHPmqLXz53izps4ce68dq8iOemC0B83Z940Q7m9MSNhOwYORdUqPHl+9EEXQKv\nCDWLWBbT8XfbOpEB5s9uHROl/LUubE/hu2F8/xdvLBM1bWbaU+OeA1jHNO3FGG1C\n3zCcWBBk++LRY7iZrBCvMv/x5FNxz7Lhyw96tZmq/R5/OWUKFf6sE+514/wNghh3\nnY5+sC5U084ou14a8AtKRB34DNjI4R9lrWR1hMOkGyVmQOetz9PqLm+J1PlAocta\nRjxTJa+yyGAQbLG5ULVirmXmZsFUwOz07fSh5k1QRZadAEt7ynydBajFv60lssWa\n6btmRJF9AgMBAAECggEAH+q8pXVqShMaZpaQkqjOvtgp0zKX1miHIIIM6HqFY76l\nCTpkKSRJj3Fc3kVr2B1HKHh0+1F6202PqNJIabEWBksl6PmVdml1OdxAPPrw3I0f\nMW174aOVCCfkCrxtUgR2PNcYwH5zb57EWjVcNY/UL7iYzJSqjjKOdClCyvMQ/Lqo\n6oNYNyld/p5rNsMASs62JYRMkoWQ8QVLzPa2krcTot4iOk5wAE8tvKMplmqgkOdy\nxBdzSMNAaZmfAi9IJzQbX2WUunE/s7ALWaVYaZMjdGHtDIb1cNzUAGyhnFAyBBoG\nN8I++EE4jqlsEqQ4zTW6BodVbra5P8xSKxilEovcFQKBgQD8dkyxxiG3dUksLklj\ndSfQj4Vcj0XOaonSp/+PnKc9d9yb00S/SJX8fd0lRlAJeTqmoz3Uz4C/9vV7sAm6\nm60UPqJmgPY7tzqbSZaVytEUHbwWwcyLJLe+G2U3N7HKTa0qplBgLYMWR09LK+T1\nMhTuLD2uleGqP/YAF1mrL/HT4wKBgQDXFKLn/CqZHjL+ppRlJgY8m6z7p3tUQdVW\nHX+Z1JI882IIfCjmRr9rEg2Y2wY0jh28hBxr8v8YSq7x390bRIHHV0a9Ea3xMm3r\nOJWjUwfjoZOMS7oD9KXalBUZTV+7kJ/wQqUfrXd3zB+GToe/gZpNSQURl5q57h20\nJSVMPfLDHwKBgQCLeBskdq13uT6EPsniPP2S1Ua6fJf20Zp0GsUvJD6r0YS5PPyU\no9fgFfROvEpJAYTqO/JTl5Kr+hVhkD2/rnLuZS+4avQcxzuEQCIFfHcGouqes894\n6v7q8h13ZLg+Z60Li7eJensZmqlugMBKyLERZrVotnplYFJZeIzb6m+xOwKBgQCb\nCissYyAp5BUKb/YEu9Y/FlEpzt8eK56nRvhWYV9RRHhkeWvaIyGVAxx+FVRxyggx\nfmImhrHQRvW5MZBnOYj7szQw0m+6sIl/x/hGFXJYan674VKjy1VLLPfQl2/s+yHv\nxXrWTOsTljcbT7yXFcuu7nYS6mAEq1sKIsSyIu2+LQKBgQDkxpevaqfr+E+Pne1U\noDGVmS2uWPYJB685whkPPPFXrT65glsV+jhT5vN4TjlEtRboXgptXjVecb3jP2+3\n3/3TcRV52CSe/wvRZNt/RuaqVe/qeJGfQZ1vGyjTSBkZo2M0VSAYkG1fMGxxgjKi\no/w4zyth3T+iPGXxuTEoXhcGsg==\n-----END PRIVATE KEY-----\n"
      }),
      databaseURL: "https://testproject-1e497.firebaseio.com"
}

const app = admin.initializeApp(firebase);

module.exports = app;
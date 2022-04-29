describe("API with user", () => {
    it("Should post a new user", () => {
        /*cy.request({
                    method: "POST",
                    url: "https://petstore.swagger.io/v2/user",
                    body: {
                        "id": 123,
                        "username": "Test user2",
                        "firstName": "Fedor",
                        "lastName": "Kozlov",
                        "email": "Kozlov@gmail.com",
                        "password": "123",
                        "phone": "7654321",
                        "userStatus": 2

                    }
                })*/
        cy.createUser({
            id: 123,
            username: "Test user2",
            firstName: "Fedor",
            lastName: "Kozlov",
            email: "Kozlov@gmail.com",
            password: "123",
            phone: "7654321",
            userStatus: 2,
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });

    it("Should put updated user", () => {
        /*cy.request({
                method: "POST",
                url: "https://petstore.swagger.io/v2/user",
                body: {
                    "id": 123,
                    "username": "Test user3",
                    "firstName": "Igor",
                    "lastName": "Kozlov",
                    "email": "KozlovI@gmail.com",
                    "password": "123",
                    "phone": "7654327",
                    "userStatus": 2

                }
            })*/

        cy.createUser({
            id: 123,
            username: "Test user3",
            firstName: "Igor",
            lastName: "Kozlov",
            email: "KozlovI@gmail.com",
            password: "123",
            phone: "7654327",
            userStatus: 2,
        });

        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/Test%20user2",
            body: {
                id: 123,
                username: "Test user3",
                firstName: "Igor",
                lastName: "Kozlov",
                email: "KozlovI@gmail.com",
                password: "test",
                phone: "7654327",
                userStatus: 1,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });

    it("Should deleted user", () => {
        /*cy.request({
                method: "POST",
                url: "https://petstore.swagger.io/v2/user",
                body: {
                    "id": 123,
                    "username": "Test user4",
                    "firstName": "I",
                    "lastName": "K",
                    "email": "User4@gmail.com",
                    "password": "user",
                    "phone": "7654327",
                    "userStatus": 2

                }
            })*/

        cy.createUser({
            id: 123,
            username: "Test user4",
            firstName: "I",
            lastName: "K",
            email: "User4@gmail.com",
            password: "user",
            phone: "7654327",
            userStatus: 2,
        });

        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/Test%20user4",
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        });
    });
});
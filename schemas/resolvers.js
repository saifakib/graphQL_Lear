const { userList } = require("./fakeData");

const resolvers = {
    Query: {
        users:() => {
            return userList;
        },
        user: (_, args) => {
            return userList.find(user => user.id === Number(args.id));
        }
    }
}

module.exports = { resolvers }
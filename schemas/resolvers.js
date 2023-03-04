const { userList } = require("./fakeData");

const resolvers = {
    Query: {
        users:() => {
            return userList;
        },
        user: (_, args) => {
            return userList.find(user => user.id === Number(args.id));
        }
    },
    User: {
        friends: (parent) => {
            return userList.filter(user => parent.friends.includes(user.id))
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const user = args.input;
            user.id = userList.length + 1;
            userList.push(user);
            return user;
        },
        updateUser: (_, args) => {
            const user = args.input;
            const index = userList.findIndex(user => user.id === Number(user.id));
            userList[index].username = user.username;
            return userList[index];
        },
        deleteUser: (_, args) => {
            //userList.filter(user => user.id != Number(args.id));
            const index = userList.findIndex(user => user.id === Number(args.id));
            userList.splice(index, 1);
            return userList[index];
        }
    }
}

module.exports = { resolvers }
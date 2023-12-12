# Data Modelling in mongoose

```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

export const User = mongoose.model("User", userSchema);
```

- Note: - When connecting this above code to mongoDB then User name got changes to users as it is best practice by mongoDB it will give plural to every one.

- Where to store the data so in this feild - mongoose.Schema({"Data"})

- A normal approach to store the data

```javascript
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  isActive: Boolean,
});
```

- A Professional Approach to store the data we will define object instead of STring and then we will use the super power of mongoose

```javascript
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    // required: [true, 'Password is required!'], You can also pass arrays to them and use custom messages also like this example.
    required: true,
  },
});
```

- First feild will define the data and second will define the timestamps like in the below example ->

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    // required: [true, 'Password is required!'],
    required: true,
  }, {timestamps: true}
});
```

- give refrence to another data model and the name of ref should be same as model name

```js
type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
```

- Arrays of subtodos in Todo

```js
subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
],
```

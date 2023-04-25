const User = require('./users');
const Post = require('./posts');
const Comment = require('./comments');
const Following = require('./following');

//Users Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});
//----------------------

//Posts your comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
//----------------------

//Users comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
//----------------------

//User can follow through Following
User.belongsToMany(User, { as: 'Followees',  through: Following });
//----------------------


module.exports = { User, Post, Comment, Following };

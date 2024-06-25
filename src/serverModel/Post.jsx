export class Post {
  id = 0;
  userID = 0;
  title = "";
  body = "";
  reactions = 0;
  tags = [];

  constructor(id, userID, title, body, reactions, tags) {
    this.id = id;
    this.userID = userID;
    this.title = title;
    this.body = body;
    this.reactions = reactions;
    this.tags = tags;
  }
}

export const PostMapper = (serverPost) =>
  new Post(
    serverPost.id,
    serverPost.userId,
    serverPost.title,
    serverPost.body,
    serverPost.reactions.likes + serverPost.reactions.dislikes,
    serverPost.tags
  );

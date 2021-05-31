const request = require('supertest');
const app = require('../server');
const postFixture = require('../fixtures/post');
const models = require("../database/models");

describe('Post Endpoints', () => {
  let samplePost;
  beforeEach(() => {
    samplePost = postFixture();
  })
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send(samplePost)
    console.log(samplePost);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('post');
    expect(res.body.post.userId).toEqual(samplePost.userId);
  });

  it('should fetch a single post', async () => {
    const postId = 1;
    const res = await request(app).get(`/api/posts/${postId}`);
    // TODO: Test StatusCode equal 200
    // TODO: Test res.body has post 
  });

  it('should fetch all posts', async () => {
    const res = await request(app).get('/api/posts');
    //TODO: Test StatusCode equal 200
    //TODO: Test res.body has posts
    //TODO: Test res.body has posts length = 12
  });

  it('should update a post', async () => {
    const res = await request(app)
      .put('/api/posts/1')
      .send(samplePost);

    //TODO: Test StatusCode equal 200
    //TODO: Test res.body has post
    //TODO: Test res.body.post content with samplePost
  });

  it('should return status code 500 if db constraint is violated', async () => {
    delete samplePost.userId
    const res = await request(app)
      .post('/api/posts')
      .send(samplePost);
      console.log(res.body);
    //TODO: Test StatusCode equal 200
    //TODO: Test res.body.post has error
  });

  it('should delete a post', async () => {
    //TODO: call delete post by postId then test StatusCode equal 204
  });

  it('should respond with status code 404 if resource is not found', async () => {
    const postId = 1;
    //TODO: Test StatusCode equal 404
  });

  afterAll(async () => {
    await models.User.destroy({
      where: {},
      truncate: true
    })
    await models.Comment.destroy({
      where: {},
      truncate: true
    })
    await models.Post.destroy({
      where: {},
      truncate: true
    })
  });
});

import {createUser, getUserInfo} from "../web3/users";
import {createTweet, getTweetInfo} from "../web3/tweets";

export default class IndexPage extends React.Component {

  logUser = async () => {
    const userInfo = await getUserInfo(1);
    console.log(userInfo);
  };

  createUser = async () => {
    const tx = await createUser("tristan");
    console.log(tx);
  };

  logTweet = async () => {
    const tweetInfo = await getTweetInfo(1);
    console.log(tweetInfo);
  };

  createTweet = async () => {
    const tx = await createTweet("Hello world!");
    console.log(tx);
  };

  render() {
    return (
      <div>
        <button onClick={this.logUser}>
          Get user with ID 1
        </button>

        <button onClick={this.createUser}>
          Create user
        </button>

        <button onClick={this.logTweet}>
          Get tweet with ID 1
        </button>

        <button onClick={this.createTweet}>
          Create tweet
        </button>
      </div>
    )
  }
}
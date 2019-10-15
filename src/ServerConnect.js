import {connect} from 'redux';

const ServerConnect = async () => {
  let ws = new WebSocket('ws://localhost:8082');

  ws.onopen = await
  function (event) {
    console.log('open');
  }
  ws.onmessage = await
  function (event) {
    console.log('Message');
    console.log(event.data);
  }
}

export default ServerConnect;
const React = require('react');
const Link  = require('react-router').Link;

const CreateRoom = React.createClass({
  render: function() {
    return (
      <div className="createRoomButton">
        <Link to="/workSpace" className="button">Create a room</Link>
      </div>
    );
  },
});

module.exports = CreateRoom;

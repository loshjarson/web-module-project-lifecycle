import React from "react";
import axios from "axios";


class UserCard extends React.Component {
    constructor() {
        super()
    }
    


    render() {
        return (
            <a href={this.props.user.html_url}>
            <div className="user-card">
                <div className="card-header">
                    <h2 className="user-login">{this.props.user.login}</h2>
                    <p className="user-id">id: {this.props.user.id}</p>
                    <div className="stats">
                        <p>followers:{this.props.user.followers}</p>
                        <p>following:{this.props.user.followers}</p>
                        <p>public repos:{this.props.user.public_repos}</p>
                    </div>
                </div>
                <img src={this.props.user.avatar_url} alt="user's avatar"/>
                <div>
                    <h3>Followers</h3>
                    {this.props.followers.map(user => {
                        return(
                            <div className="follower-card">
                                <img src={user.avatar_url}/>
                                <p>{user.login}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            </a>
        )
    }
}

export default UserCard;
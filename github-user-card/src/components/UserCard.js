import React from "react";


class UserCard extends React.Component {
    constructor() {
        super()
    }
    


    render() {
        return (
            
            <div className="user-card">
                <a href={this.props.user.html_url}>
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
                    </a>
                    <h3>Followers</h3>
                    <div className="followers">
                        {this.props.followers.map(user => {
                            return(
                                <a href={user.url} className="follower-card">
                                        <img src={user.avatar_url}/>
                                        <p>{user.login}</p>
                                </a>
                            )
                        })}
                    </div>
            </div>
        )
    }
}

export default UserCard;
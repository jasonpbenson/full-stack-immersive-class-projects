// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

var data = [
    {
      author:{
        avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
        name:"neo"
      },
      commentHeading: "I am the One.",
      text: "Humanity, relax. I will save you.",
      date: "Today",
      userBadge: [ 
        'Superman',
        'Herald',
        'Engineer'
      ]
    },
    {
      author:{
        avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
        name:"Morpheus"
      },
      commentHeading: "There is no spoon.",
      text: "Don't htink you are. KNow you are.",
      date: "Two days ago",
      userBadge: [ 
        'The man',
        'Bard',
        'Samurai swordsman'
      ]
    }
  ]

// class UserInfo extends React.Component{
//     constructor(props){
//         super(props);
//         this.name = name;
//     }
// }

// class Avatar extends React.Component{
//     constructor(props){
//         super(props);
//         this.avatarUrl = avatarUrl;
//     }
// }

// class CommentBody extends React.Component{
//     constructor(props){
//         super(props);
//         this.commentHeading = commentHeading;
//         this.text = text;
//         this.date = date;
//     }
// }

// class Badges extends React.Component{
//     constructor(props){
//         super(props);
//         this.userBadge = userBadge[0];
//     }
// }

function UserInfo(props) {
    <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
        <div className="UserInfo-name">{props.author.name}</div>  
    </div>
}

function CommentBody(props) {
    <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo name={props.name} avatarUrl={props.avatarUrl} />
            <CommentBody commentHeading={props.commentHeading} date={props.date} />
            <div className="UserBadges">
                <div className="badge">{props.userBadge[0]}</div>
                <div className="badge">{props.userBadge[1]}</div>
                <div className="badge">{props.userBadge[2]}</div>
            </div>
        </div>
    );
   }
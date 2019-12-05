
export default{
    load: function(){
        fetch(process.env.REACT_APP_ENDPOINT)
        .then(response => response.json())
        .then(json => {
            const users = json.map((item, i) => {
                return item
            });
            this.setState({
                users: users
            })
        })        
    }
}
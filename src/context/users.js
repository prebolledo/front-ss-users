
export default{
    load: function(){
        fetch('http://localhost:10000/')
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
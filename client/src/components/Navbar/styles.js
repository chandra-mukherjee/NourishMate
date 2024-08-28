import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        border: '2px solid rgba(0,0,0)',
    
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'black',
        textDecoration: 'none'
    },
    icon: {
        width: 70,
        height: 70,
        padding: 10,
        paddingLeft: 40
    },

}));
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionsArea from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        paddding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%'
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: 'auto'
    }
}));


function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6"> {post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variant="caption" className={classes.caption}>
                            {'Escrito por'}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
            />

            <CardContent className={classes.content}>
                <Typography
                    className={classes.message}
                    variant="body1"
                >
                    .{post.hashtags}
                </Typography>
                <CardActionsArea>
                    <img src={post.image} className={classes.image} alt="img" />
                </CardActionsArea>
            </CardContent>

            {/* <CardActions disableSpacing>
                <IconButton aria-label="Like">
                    <FavoriteIcon />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="body2"
                    >
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="Comment">
                    <MessageIcon />
                    <Typography
                        className={classes.reactions}
                        color="textSecondary"
                        variant="body2"
                    >
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="Favorite" className={classes.favorite}>
                    <BookmarkIcon />
                </IconButton>
            </CardActions> */}
        </Card>
    )
}

export default PostCard;
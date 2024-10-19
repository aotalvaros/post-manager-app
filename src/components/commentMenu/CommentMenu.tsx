import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import '../styles/commentMenu.scss';
import CommentIcon from '@mui/icons-material/Comment';
import { MenuActions } from './MenuActions';
import { IPost } from '../../types';

export const CommentMenu = () => {

    const mockRows = [
      {
        id: '1',
        userId: "123",
        title: "Esto es un titulo",
        body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Diam donec nisl dolor semper blandit. Curabitur facilisi etiam nibh dis condimentum venenatis efficitur. Sed erat aliquet nam libero blandit hac morbi. Dignissim dignissim et suspendisse nec pulvinar orci pulvinar mollis. Rhoncus ornare mattis mattis taciti nisl tincidunt. Varius nec dignissim tortor nascetur nullam ridiculus curabitur sem. Taciti diam consequat curabitur pellentesque erat ullamcorper. Lectus ridiculus class efficitur et at tristique. Praesent vel sit accumsan lacinia dui nam per nam feugiat. ",
      },
      {
        id: '2',
        userId: "222",
        title: "Esto es un titulo",
        body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Diam donec nisl dolor semper blandit. Curabitur facilisi etiam nibh dis condimentum venenatis efficitur. Sed erat aliquet nam libero blandit hac morbi. Dignissim dignissim et suspendisse nec pulvinar orci pulvinar mollis. Rhoncus ornare mattis mattis taciti nisl tincidunt. Varius nec dignissim tortor nascetur nullam ridiculus curabitur sem. Taciti diam consequat curabitur pellentesque erat ullamcorper. Lectus ridiculus class efficitur et at tristique. Praesent vel sit accumsan lacinia dui nam per nam feugiat. ",
      }
    ];

  return (
    <Box className='boxContent'>
      <Typography variant="h6">Comentarios</Typography>
      <section 
        className='styleContentDataTable'
      >
        {
          mockRows?.map((post: IPost) => (
              <div key={post.id} className='commentContainer'>
                <section className='headerContainer'>
                  <CommentIcon />
                  <Typography className='styleTitle'> {post.title}</Typography>
                </section>
                  <Typography className='styleBody'> {post.body}</Typography>

                  <div className='styleContentInfoUser'>
                    <section className='styleInfoUser'>
                      <ListItem>
                        <ListItemText className='styleListItem' primary='ID Usuario:' secondary={post.userId} />
                      </ListItem>
                      <ListItem>
                        <ListItemText className='styleListItem' primary='ID:' secondary={post.id} />
                      </ListItem>
                    </section>
                    <section className='styleActions'>
                      <MenuActions 
                        data={post}
                      />
                    </section>
                  </div>
              </div>
          ))
      }
      </section>
    </Box>
  );
}

import { Box, Typography } from '@mui/material';
import '../styles/commentMenu.scss';
import { CreateCommentForm } from './createCommentForm/CreateCommentForm';
import { DataTable } from './dataTable/DataTable';

export const CommentMenu = () => {

  return (
    <Box className='boxContent'>
      <Typography variant="h6">Ver Commentarios</Typography>
      
      <CreateCommentForm/>

      <DataTable/>
      
    </Box>
  );
}

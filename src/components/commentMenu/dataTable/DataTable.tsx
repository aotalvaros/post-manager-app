
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import '../../styles/dataTable.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDataTable } from '../../../hooks/useDataTable';
import PublishIcon from '@mui/icons-material/Publish';

export const DataTable = () => {

    const {handleDelete, handleEdit, handlePublish, rows}  =useDataTable()

    return (
        <div className='contentTable' data-testid='content-table'>
            <h2>Comentarios</h2>
            {
                rows.length > 0 ? 
                        <Paper className='containerTableResults' style={{display: 'flex', flexDirection:'column'}}>
                            <TableContainer className='tableResults'>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table" data-testid="table-results">
                                    <TableHead>
                                        <TableRow className='tablaHeader'>
                                            <TableCell className='tableCell'>Titulo</TableCell>
                                            <TableCell className='tableCell'>Contenido</TableCell>
                                            <TableCell className='tableCell'>Acciones</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        rows.map((row, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" className='tableCell'>
                                                    {row.title}
                                                </TableCell>
                                                <TableCell className='tableCell'>{row.content}</TableCell>
                                                <TableCell className='tableCell'>
                                                    <IconButton id="delete-button"
                                                        aria-controls='basic-menu'
                                                        aria-haspopup="true"
                                                        aria-expanded='true' onClick={() => handleDelete(row.id)}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton id="edit-button"
                                                        aria-controls='edit-menu'
                                                        aria-haspopup="true"
                                                        aria-expanded='true' 
                                                        onClick={() => handleEdit(row)}
                                                    >
                                                        <EditIcon className='icon-edit'/>
                                                    </IconButton>
                                                    {/* botn Publicar */}
                                                    <IconButton id="publish-button"
                                                        aria-controls='publish-menu'
                                                        aria-haspopup="true"
                                                        aria-expanded='true'
                                                        onClick={handlePublish}
                                                    >
                                                        <PublishIcon className='icon-publish'/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                        :
                    <Box className='containerResults' data-testid='message_no_search'>No hay datos</Box>
            }
        </div>
        
    );
}

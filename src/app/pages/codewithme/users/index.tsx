import React from 'react';

import { Button, Stack } from '@mui/material';

const ListUser = () => {
  return (
    <Stack gap={'20px'}>
      <Stack direction={'row'} justifyContent={'flex-end'} gap={'8px'}>
        <Button>Add</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Stack>

      <Stack>
        <table>
          <thead>
            <tr>
              <th>Head</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Data</td>
            </tr>
          </tbody>
        </table>
      </Stack>
    </Stack>
  );
};

export default ListUser;

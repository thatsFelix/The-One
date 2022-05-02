import React, {FC} from "react";
import { styled } from '@mui/material/styles';
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
import Iconify from '../../../components/Iconify';

// TODO open={false} 是js转ts临时加的
const PopperStyle = styled((props) => <Popper open={false} placement="bottom-start" {...props} />)({
  width: '280px !important',
});

interface IBlogPostsSearchProps {
  posts: Array<{
    id: string
    title: string
  }>
}

const BlogPostsSearch: FC<IBlogPostsSearchProps> = ({ posts }) => {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={posts}
      getOptionLabel={(post) => post.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search post..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default BlogPostsSearch

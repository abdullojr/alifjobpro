import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Alert } from '@mui/material';


const Posts = ({ posts }) => {

  const [fav, setFav] = useState([""]);
  const [addAlert, setAddAlert] = useState(true);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(fav));
  }, [fav])


  const addToFav = async (event) => {
    await setFav((arr) => [...arr, event]);
    setAddAlert(false);

    const interval = setInterval(() => {
      setAddAlert(true);
    }, 1000);

    return () => clearInterval(interval);

  }




  const [searchInput, setSearchInput] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = posts.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };





  return (
    <div className='p-5'>

      <Alert severity="success" style={{ margin: '40px' }} hidden={addAlert}>This is a success alert — check it out!</Alert>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ padding: 20 }}
      >
        <Grid container>
          <Grid item xs={12} md={12} style={{
            paddingBottom: '40px'
          }}>
            <Input
              style={{ width: 400, marginTop: 30 }}
              placeholder="Search your cart here..."
              onChange={(e) => searchItems(e.target.value)}
            />
          </Grid>
          {searchInput.length > 1
            ? filteredResults.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item.id} className="mb-4">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        width={"100%"}
                        component="img"
                        height="140"
                        image={item.url}
                        alt="image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.id - 1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" onClick={() => addToFav(item.title)}>
                        AddToFavorite
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
            : posts.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item.id} className="mb-4">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        width={"100%"}
                        component="img"
                        height="140"
                        image={item.url}
                        alt="image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.id - 1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" onClick={() => addToFav(item.title)}>
                        AddToFavorite
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default Posts;
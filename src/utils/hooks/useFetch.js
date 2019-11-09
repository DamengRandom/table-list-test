import React from 'react';

export default function useFetch(url) {
  const [state, setState] = React.useState({
    data: null,
    loading: false
  });

  React.useEffect(() => {
    setState({
      data: null,
      loading: true
    });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setState({
          data,
          loading: false
        });
      })
  }, [url]);

  return state;  
}

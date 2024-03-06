import React from 'react';

const Page1 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Page 1</h1>
      <p style={styles.description}>
        This is a cool page where you can showcase awesome content.
      </p>
      <div style={styles.imageContainer}>
        <img
          src="https://via.placeholder.com/400"
          alt="Cool Image"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default Page1;

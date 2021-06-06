function PageTitle({ title }) {
   return (
      <div
         style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginTop: '3rem',
            marginBottom: '3rem',
         }}
      >
         <h1>{title}</h1>
      </div>
   );
}

export default PageTitle;

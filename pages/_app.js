import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto, sans-serif;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

function Home() {
  const style = {
    fadeIn: {
      animation: "fadeIn 2s",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        color: "#333",
        padding: "20px",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          opacity: 0,
          animation: "fadeIn 2s ease forwards",
          marginTop: "0px",
        }}
      >
        Para Marcilene & Sarah
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          maxWidth: "600px",
          opacity: 0,
          animation: "fadeIn 3s ease 1s forwards",
        }}
      >
        Cada momento ao vosso lado é uma benção, uma viagem repleta de amor e
        descobertas. <br />
        Marcilene, minha companheira, você é a essência da minha vida. <br />
        Sarah, minha querida filha, você é a luz dos meus olhos. <br />
        O amor que sinto por vocês transcende as palavras. <br />- Com todo o
        amor, Papai ♥
      </p>
    </div>
  );
}

export default Home;

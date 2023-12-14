function Images() {
  return (
    <div>
      {/* images */}
      <div>
        {/* box1 - box2 - box3 */}
        <div
          className="absolute top-[250px] right-[180px] bg-no-repeat w-72 h-48 bg-cover rounded-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div
          className="absolute top-[400px] right-[500px] bg-no-repeat w-72 h-48 bg-cover rounded-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div
          className="absolute top-[470px] right-[180px] bg-no-repeat w-72 h-48 bg-cover rounded-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Images;

db.produtos.updateMany({
  $or: [{ name: "Big Mac" }, { nome: "Quarteirão com Queijo" }],
}, {
  $push: { ingredientes: "bacon" },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});
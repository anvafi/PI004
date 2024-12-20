const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("estan dentro");
  res.send("hola");
});
router.get("/ruta", (req, res) => {
  console.log("estan en ruta y tienen hambre");
  res.send("¿en serio?");
});
router.get("/ruta/ruta", (req, res) => {
  console.log("estan en descifrando el código");
  res.send("tengo ganas de fumar :(");
});
router.get("/ruta/ruta/ruta", (req, res) => {
  console.log("penetrando");
  res.send("abre una botella de vino");
});
router.get("/ruta/ruta/ruta/ruta", (req, res) => {
  console.log("fondo");
  res.json("lleison");
});

module.exports = router;

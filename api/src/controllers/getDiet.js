const getDiet = async (req, res) => {
  try {
    res.status(200).send("Esta ruta trae todas las diestas");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDiet;

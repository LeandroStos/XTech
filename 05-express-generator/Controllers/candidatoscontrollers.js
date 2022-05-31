const fs = require("fs");
const path = require("path");

const helper = {};

helper.read = (fileName) =>
  fs.readFileSync(path.join(__dirname, `../data/${fileName}`), "utf-8");

helper.write = (fileName, data) =>
  fs.writeFileSync(
    path.join(__dirname, `../data/${fileName}`),
    JSON.stringify(data, null, 2),
    "utf-8"
  );

const getcandidatos = () => JSON.parse(helper.read("users.json"));

const setcandidatos = (candidatos) => helper.write("users.json", candidatos);

const getUsuarioPorId = (id) =>
  getcandidatos().find((usuario) => usuario.id == id);

const getProximoId = async () => {
  const candidatos = await getcandidatos();
  const newId = parseInt(candidatos[candidatos.length - 1].id) + 1;
  return newId;
};

const controller = {};

controller.add = (req, res) =>
  res.render("usuario-adicionar", {
    title: req.path == "/cadastro" ? `Cadastro` : `Adicionar Usuário`,
  });

controller.create = async (req, res) => {
  const candidatos = await getcandidatos();
  const id = await getProximoId();
  const { nome, sobrenome, email, idade, descricao, admin } = req.body;
  // const avatarFileName = req.file.filename;
  const novoUsuario = {
    id,
    nome,
    sobrenome,
    email,
    idade,
    descricao,
    admin: !!admin
  };
  candidatos.push(novoUsuario);
  setcandidatos(candidatos);
  res.redirect("/sucesso");
};

controller.edit = (req, res) => {
  const usuario = getUsuarioPorId(req.params.id);
  res.render("usuario-editar", {
    title: `Editar Usuário ${req.params.id}`,
    usuario,
  });
};

controller.update = async (req, res) => {
  let candidatos = await getcandidatos();
  candidatos = candidatos.map((usuario) => {
    if (usuario.id == req.params.id) {
      const { nome, sobrenome, email, idade, descricao, admin } =
        req.body;
      // const avatarFileName = req.file.filename;
      return {
        id: usuario.id,
        nome,
        sobrenome,
        email,
        c´f,
        telefone,,
        sexo,
        data_nascimento,
        endereco,
        cep,
        cidade,
        estado,

    
        admin: !!admin,
      };
    } else {
      return usuario;
    }
  });
  setcandidatos(candidatos);
  res.redirect("/sucesso");
};

controller.exclude = (req, res) =>
  res.render("usuario-excluir", {
    title: `Excluir Usuário ${req.params.id}`,
    usuario: getUsuarioPorId(req.params.id),
  });

controller.delete = async (req, res) => {
  const candidatos = await getcandidatos().filter(
    (usuario) => usuario.id != req.params.id
  );
  setcandidatos(candidatos);
  res.redirect("/sucesso");
};

controller.show = (req, res) =>
  res.render("usuario", {
    title: `Usuário ${req.params.id}`,
    usuario: getUsuarioPorId(req.params.id),
  });

controller.index = async (req, res) =>
  res.render("candidatos", { title: `Usuários`, candidatos: await getcandidatos() });

module.exports = controller;

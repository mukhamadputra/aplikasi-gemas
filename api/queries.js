const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gemasdb",
  password: "1234",
  port: 5432,
});

const getEquipments = (request, response) => {
  pool.query("SELECT * FROM equipments ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getEquipmentById = (request, response) => {
  const id = request.params.id;

  pool.query(
    "SELECT * FROM equipments WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createEquipment = (request, response) => {
  const { category, loc, network, status, mac_sn, th } = request.body;

  pool.query(
    "INSERT INTO equipments (category, loc, network, status, mac_sn, th) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [category, loc, network, status, mac_sn, th],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Equipment added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateEquipment = (request, response) => {
  const id = request.params.id;
  const { category, loc, network, status, mac_sn, th } = request.body;

  pool.query(
    "UPDATE equipments SET category = $1, loc = $2, network = $3, status = $4, mac_sn = $5, th = $6  WHERE id = $7",
    [category, loc, network, status, mac_sn, th, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Equipment modified with ID: ${id}`);
    }
  );
};

const deleteEquipment = (request, response) => {
  const id = request.params.id;

  pool.query("DELETE FROM equipments WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Equipment deleted with ID: ${id}`);
  });
};

// =======================================

const getReports = (request, response) => {
  pool.query("SELECT * FROM reports ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getReportById = (request, response) => {
  const id = request.params.id;

  pool.query("SELECT * FROM reports WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createReport = (request, response) => {
  const { equip_id, category, time, team, activity } = request.body;
  const file = request.file.filename;

  pool.query(
    "INSERT INTO reports (equip_id, category, time, team, activity, file) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [equip_id, category, time, team, activity, file],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Report added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateReport = (request, response) => {
  const id = request.params.id;
  const { equip_id, category, time, team, activity } = request.body;

  pool.query(
    "UPDATE reports SET equip_id = $1, category = $2, time = $3, team = $4, activity = $5  WHERE id = $6",
    [equip_id, category, time, team, activity, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Report modified with ID: ${id}`);
    }
  );
};

const deleteReport = (request, response) => {
  const id = request.params.id;

  pool.query("DELETE FROM reports WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Report deleted with ID: ${id}`);
  });
};

// ============================================================

const getReportCount = (request, response) => {
  pool.query(
    "SELECT equipments.id, equipments.category, equipments.loc, count(reports) as total FROM equipments FULL OUTER JOIN reports ON equipments.id=reports.equip_id GROUP BY equipments.id ORDER BY total DESC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getAllJoin = (request, response) => {
  pool.query(
    "SELECT equipments.category as equip_cat, equipments.loc, reports.category as rep_cat, reports.time, reports.team, reports.activity, reports.file FROM equipments INNER JOIN reports ON equipments.id=reports.equip_id",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getEquipments,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
  getReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  getReportCount,
  getAllJoin,
};

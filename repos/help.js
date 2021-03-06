const { Op } = require("sequelize");
const models = require("../models");

const Help = () => {
    const get = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const helpList = await models.Help.findAll();
                resolve(helpList);
            } catch (error) {
                reject(error);
            }
        });
    }

    const getById = id => {
        return new Promise(async (resolve, reject) => {
            try {
                const help = await models.Help.findOne({id});
                resolve(help);
            } catch (error) {
                reject(error);
            }
        });
    }

    const add = help => {
        return new Promise(async (resolve, reject) => {
            try {
                const insertedHelp = await models.Help.create(help);
                await insertedHelp.save();
                resolve(insertedHelp);
            } catch (error) {
                reject(error);
            }
        });
    }

    const update = (id, help) => {
        return new Promise(async (resolve, reject) => {
            try {
                const updatedHelp = await models.Help.update(help, {where: {id}});
                resolve(updatedHelp);
            } catch (error) {
                reject(error);
            }
        });
    }

    const remove = id => {
        return new Promise(async (resolve, reject) => {
            try {
                const removedHelp = await models.Help.destroy({where: {id}});
                resolve(removedHelp);
            } catch (error) {
                reject(error);
            }
        });
    }

    return { get, getById, add, update, remove };
}

module.exports = Help();
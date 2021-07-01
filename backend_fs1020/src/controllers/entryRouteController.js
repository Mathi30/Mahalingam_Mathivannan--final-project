import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import { v4 as uuidv4 } from "uuid" 
// import entries from  '../../data/entries.js'
import {addJosnData,readFileModule, writeFileModule  }from '../../src/ReadWriteModule.js'
import path from 'path'
const EntriesFileLocation = process.env.EntriesDbLocation

const entriesfilePath = path.resolve(EntriesFileLocation)


const getEntry = async (req, res) => {
    try {
        return res.send(await readFileModule(entriesfilePath))
        return res.status(200).json(entries);
    } catch (err) {
      next(err)
    }
};

const getEntryById = async (req, res) => {
    try {
        const id = req.params.id
        let entriesDataList = await readFileModule(entriesfilePath)   
        const entry = entriesDataList.find(findEntry => findEntry.id == id) 
        if (entry) {
            return res.json(entry)
        }
        return res.status(404).json({ message: `entry ${id} not found`})
    } catch (err) {
      console.error(err)
      // throw err
      next(err)
    }
};



const createEntry = async (req, res) => {
    try {
        let newFormEntry = {
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            content: req.body.content,
          };
          addJosnData(entriesfilePath, newFormEntry)
          return res.status(201).json(newFormEntry);
    } catch (err) {
      next(err)
    }
}


export { getEntry,
    getEntryById,
    createEntry }

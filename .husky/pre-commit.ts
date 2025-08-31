#!/usr/bin/env ts-node
import { execs } from './common/exec';

const commands = ['npx nx run-many -t test lint build'];

execs(commands);

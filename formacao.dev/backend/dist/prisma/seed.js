"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const core_1 = require("../src/core");
const prisma = new client_1.PrismaClient;
async function seed() {
    await prisma.produto.createMany({
        data: core_1.produtos.map((produto) => ({
            ...core_1.produtos,
            id: undefined,
        })),
    });
}
seed();
//# sourceMappingURL=seed.js.map
import { BandDatabase } from "../data/BandDatabase"
import { InvalidInputError } from "../error/InvalidInputError"
import { UnauthorizedError } from "../error/UnauthorizedError"
import { Band, BandInputDTO } from "../model/Band"
import { UserRole } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class BandBusiness {

    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async registerBand(input: BandInputDTO, token: string) {

        const tokenData = this.authenticator.getData(token)

        if (tokenData.role !== UserRole.ADMIN) {
            throw new UnauthorizedError("Only admins can access this feature")
        }

        if (!input.name || !input.mainGenre || !input.responsible) {
            throw new InvalidInputError("Invalid input to register Band")
        }

        await this.bandDatabase.registerBand(
            Band.toBand({
                ...input,
                id: this.idGenerator.generate()
            })!
        )
    }
}
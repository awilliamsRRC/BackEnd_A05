/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the branch.
 *         name:
 *           type: string
 *           description: The name of the branch.
 *         address:
 *           type: string
 *           description: The physical address of the branch.
 *         phone:
 *           type: string
 *           description: The phone number for the branch.
 */

export type Branch = {
    id: string;
    name: string;
    address: string;
    phone:string;
};
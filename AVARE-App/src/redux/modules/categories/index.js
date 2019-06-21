/*
        Copyright 2016-2018 AVARE project team

        AVARE-Project was financed by the Baden-Württemberg Stiftung gGmbH (www.bwstiftung.de).
        Project partners are FZI Forschungszentrum Informatik am Karlsruher
        Institut für Technologie (www.fzi.de) and Karlsruher
        Institut für Technologie (www.kit.edu).

        Files under this folder (and the subfolders) with "Created by AVARE Project ..."-Notice
	    are our work and licensed under Apache Licence, Version 2.0"

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
*/
export function createCategory(_id) {
    return {
        _id: _id,
        settings: {
            location: {
                status: "filtered",
                blockSettings: {
                    blockEnd : "2018-09-03T19:00:00"
                },
                filterSettings: {
                    distance: 50,
                },
            },
            camera: {
                status: "filtered",
                filterSettings: {
                    censored: "hard"
                },
            },
            mic: {
                status: "filtered",
                filterSettings: {
                    noise: "hard"
                },
            },
            contacts: {
                status: "filtered",
                filterSettings: {
                    horizontal: [
                        "LOOKUP_KEY_1",
                    ],
                    vertical: [
                        "StructuredName.CONTENT_ITEM_TYPE",
                        "Organization.CONTENT_ITEM_TYPE",
                    ],
                },
            },
        }
    }
}
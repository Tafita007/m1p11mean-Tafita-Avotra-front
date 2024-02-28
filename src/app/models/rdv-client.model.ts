export interface RdvClient {
    _id ?: string;
    service ?: ServiceRdv []
    date ?: string;
    etatPaiement ?: boolean;
    prixTotal ?: number;
    paiement ?: PaiementRdv [];
    etatRdv ?: number;
    idEmploye ?: string;
    idClient ?: string;
}

export interface ServiceRdv {
    idService ?: string;
    nom ?: string;
    prix ?: string;
    duree ?: number;
    commission ?: number
}

export interface PaiementRdv {
    montant ?: number;
    date ?: string;
}

export interface ServiceToSend{
    idService ?: string;
    nom ?: string;
    commission ?: number;
    duree ?: number;
    prix ?: number;
}
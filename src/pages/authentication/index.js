import { connect } from "react-redux";
import { AuthMain as Component } from "./AuthMain";

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export const Authentication = connect(mapStateToProps, mapDispatchToProps)(Component)